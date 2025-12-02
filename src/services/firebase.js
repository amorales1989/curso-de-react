// Servicio sencillo para inicializar Firebase (opcional) y exponer funciones de Firestore.
// Usa variables de entorno VITE_FIREBASE_* (Vite) si desea habilitar Firestore.
let db = null
let initialized = false

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

async function initFirestore() {
  if (initialized) return
  initialized = true
  if (import.meta.env.VITE_USE_FIRESTORE !== 'true') return
  try {
    const pkgApp = 'firebase/app'
    const pkgFs = 'firebase/firestore'
    const firebase = await import(/* @vite-ignore */ pkgApp)
    const firestore = await import(/* @vite-ignore */ pkgFs)
    const { initializeApp } = firebase
    const { getFirestore, collection, getDocs, doc, getDoc, addDoc, Timestamp } = firestore
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    // re-export helpers via closure
    initFirestore.collection = collection
    initFirestore.getDocs = getDocs
    initFirestore.doc = doc
    initFirestore.getDoc = getDoc
    initFirestore.addDoc = addDoc
    initFirestore.Timestamp = Timestamp
  } catch (err) {
    console.error('Firebase no está disponible o no está instalado:', err.message)
    db = null
  }
}

export async function getProductsFromFirestore() {
  await initFirestore()
  if (!db) throw new Error('Firestore no está inicializado')
  const productosCol = initFirestore.collection(db, 'productos')
  const snapshot = await initFirestore.getDocs(productosCol)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function getProductByIdFromFirestore(id) {
  await initFirestore()
  if (!db) throw new Error('Firestore no está inicializado')
  const ref = initFirestore.doc(db, 'productos', id)
  const snap = await initFirestore.getDoc(ref)
  if (!snap.exists()) throw new Error('Producto no encontrado')
  return { id: snap.id, ...snap.data() }
}

export async function createOrderInFirestore(order) {
  await initFirestore()
  if (!db) {
    // Firestore no está disponible: fallback local (mock)
    try {
      const localOrders = JSON.parse(localStorage.getItem('local_orders') || '[]')
      const id = `local_${Date.now()}`
      const newOrder = { id, ...order, createdAt: new Date().toISOString() }
      localOrders.push(newOrder)
      localStorage.setItem('local_orders', JSON.stringify(localOrders))
      return id
    } catch (err) {
      throw new Error('No se pudo guardar la orden localmente: ' + err.message)
    }
  }

  const ordersCol = initFirestore.collection(db, 'orders')
  const newOrder = { ...order, createdAt: initFirestore.Timestamp.fromDate(new Date()) }
  const docRef = await initFirestore.addDoc(ordersCol, newOrder)
  return docRef.id
}

import clientPromise from '../../utils/dbConnect'

export default async function handler(req, res) {
  const client = await clientPromise
  const db1 = client.db('galinato')
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const data = await db1
          .collection('nowText')
          .find()
          .sort({ date: -1 })
          .toArray()

        res.status(200).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}

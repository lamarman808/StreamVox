import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('/game')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateGame = async () => {
  try {
    const res = await Client.create('/game')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateGame = async () => {
  try {
    const res = await Client.update('/game')
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteGame = async () => {
  try {
    const res = await Client.delete('/game')
    return res.data
  } catch (error) {
    throw error
  }
}

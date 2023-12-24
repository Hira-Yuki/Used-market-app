import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'

const UserPage = async () => {

  // const session = await getServerSession(authOptions)


  const userData = await getCurrentUser()
  return (
    <div>UserPage</div>
  )
}

export default UserPage
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'


const Profile = () => {
  const followerList = [{ nickname: '사용자 A'}, { nickname: '사용자b'}, { nickname: '사용자c'}]
  const followingList = [{ nickname: '사용자 A'}, { nickname: '사용자b'}, { nickname: '사용자c'}]

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )
}

export default Profile;
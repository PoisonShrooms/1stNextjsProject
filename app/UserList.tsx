import { deleteUser, fetchUsers } from './_actions';

export default async function UserList() {
  const users = await fetchUsers();

  if (!users || users.length === 0) {
  } else {
    users.reverse();

    return (
      <div className='bg-white p-4 mt-10 rounded-lg'>
        <div>
          <h2 className='pb-1 text-black'>Users</h2>
          {users.map((user) => (
            <div
              className='h-auto w-full bg-white drop-shadow-xl rounded border border-white/70 mb-2 p-2'
              key={user.id}
            >
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <div>{user.name}</div>
                  <div className='text-blue-500'>{user.email}</div>
                </div>
                <div className='flex items-center justify-end w-full'>
                  <form action={deleteUser}>
                    <input type='hidden' name='userId' value={user.id} />
                    <button className='bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded'>
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

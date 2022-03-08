import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import * as API from 'apiClient'

export function usePaginatedUsers(
  userId: string,
  limit: number,
  users: API.ListLeaderboardResponse | undefined,
  setUsers: Dispatch<SetStateAction<API.ListLeaderboardResponse | undefined>>
): {
  $hasPrevious: boolean
  $hasNext: boolean
  fetchPrevious: () => void
  fetchNext: () => void
} {
  const $hasPrevious = useMemo(
    () => users?.metadata.has_previous ?? false,
    [users]
  )
  const $hasNext = useMemo(() => users?.metadata.has_next ?? false, [users])

  const fetchUsers = useCallback(
    async (id: number, direction: 'before' | 'after') => {
      const raw = { [direction]: id.toString() }
      const result = await API.listUsers({
        userId,
        limit,
        ...raw,
      })

      if (!('error' in result)) {
        setUsers(result)
      }
    },
    [setUsers, userId, limit]
  )

  const fetchNext = useCallback(
    async () =>
      users && fetchUsers(users.data[users.data.length - 1].id, 'after'),
    [fetchUsers, users]
  )

  const fetchPrevious = useCallback(
    async () => users && fetchUsers(users.data[0].id, 'before'),
    [fetchUsers, users]
  )

  return { $hasPrevious, $hasNext, fetchPrevious, fetchNext }
}

export default usePaginatedUsers

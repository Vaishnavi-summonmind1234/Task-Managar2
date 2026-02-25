import axiosinstance from "./api"

export const filter_tasks = async (filters: {
  status?: string
  priority?: string
  title?: string
  assignee_id?: number
}) => {
  const res = await axiosinstance.get("/task/tasks/filter", {
    params: filters,
  })

  return res
}

export const update_task_logs = async (
  task_id: number,
  payload: any
) => {
  const res = await axiosinstance.patch(
    `/task/${task_id}/update_logs`,
    payload
  )

  return res
}
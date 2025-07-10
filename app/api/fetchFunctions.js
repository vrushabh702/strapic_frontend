// api/fetchFunctions.js
import apiEndpoints from "@/services/apiEndpoints"
import { fetchFromStrapi } from "./apiClient"

export const fetchServices = () => fetchFromStrapi(apiEndpoints.services)
export const fetchBlogsPopulate = () =>
  fetchFromStrapi(apiEndpoints.blogsPopulate)
export const fetchBlogsSorted = () => fetchFromStrapi(apiEndpoints.blogsSorted)

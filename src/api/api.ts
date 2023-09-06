const baseUrl = "http://localhost:3000";

export function Api(url: string, config: RequestInit) {
    return fetch(`${baseUrl}/${url}`, config)
}

import { editname, login } from "./api"

export function UpdateNameFetch(input, dispatch, user) {
    fetch("http://localhost:3001/api/v1/user/profile",
        {
            headers: { Accept: "application/json", Authorization: 'Bearer ' + user.token, 'Content-Type': 'application/json' },
            method: "PUT",
            body: JSON.stringify(input)
        }).then(data => {
            if (data.ok === true) {
                dispatch(editname(input))
            }
        })
}

export function LoginFetch(input, navigate, setError, dispatch) {
    fetch("http://localhost:3001/api/v1/user/login",
            {
                body: input,
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                method: "POST"
            }).then(data => {
                if (data.ok === true) {
                    setError(false);
                    return data.json()
                }
                throw new Error('Something went wrong')
            }).then((dataJson) => {
                fetch("http://localhost:3001/api/v1/user/profile", {
                    headers: { Accept: "application/json", Authorization: 'Bearer' + dataJson.body.token },
                    method: "POST"
                })
                    .then(data => data.json())
                    .then(data => {
                        console.log(dataJson.body.token)
                        dispatch(login([data, dataJson.body.token]))
                        navigate("/profile", { replace: true })
                    })
            }).catch(() => {
                setError(true);
            })
    }

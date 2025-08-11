export class Login {
    username= "";
    password= "";
}

export class LoginResponse {
    access_token = "";
    accountId = "";
    expires_in = "";
    token_type = "";
    createdAt= new Date();
}
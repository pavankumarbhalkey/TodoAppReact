import React, {Component} from 'react'

class AuthenticationService extends Component{
       registerSuccessfulLogin(username, password) {
        console.log('registerSuccessLogin')
        sessionStorage.setItem('authenticatedUser',username)
       }
       logout(username, password) {
          sessionStorage.removeItem('authenticatedUser')
       }

       isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
            if(user === null) return false
             return true
       }
}

export default new AuthenticationService();
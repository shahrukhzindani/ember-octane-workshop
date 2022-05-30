import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object"
import {inject as service } from '@ember/service'
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
    @tracked
    userId = null
    
    @service auth

    

    // loginAsUserWithId(val) {
    //         console.log('User Id', val)
    // }
    
    @action 
    onSelectChanged(evt) {
        this.userId = evt.target.value
        console.log(evt)
    }

    get isDisabled() {
        return !this.userId
    }

    @action
    onLoginFormSubmit(evt) {
        evt.preventDefault()
        const { target } = evt
        const val = target.querySelector('select').value
        this.auth.loginWithUserId(val)
    }
}

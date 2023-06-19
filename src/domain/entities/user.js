
class User{
    constructor(props){
        this.id = props.id;
        this.name = props.name;
        this.lastName = props.lastName;
        this.email = props.email;
        this.role = props.role;
        this.orders = props.orders;
        this.password = props.password;
    }
}

export default User

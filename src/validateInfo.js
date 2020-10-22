export default function validateInfo(values) {
  let errors = {}

  if(!values.username.trim()) {
    errors.username = "Please enter your username";
  }

  if(!values.email) {
    errors.email = "Please enter your email address";

  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address"
  }


if (!values.password){
  errors.password="Password required"
} else if (values.password.length < 6) {
  errors.password="Passport needs to be 6 characters or more"
}

if (!values.password2){
  errors.password2 = "Password required"
} else if (values.password2 !== values.password){
  errors.password2 = "Passwords do not match"
}
return errors;
}

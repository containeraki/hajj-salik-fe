import React from 'react'


const NewLoginForm = () => (
    <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
<Header as='h2' color='#5bc0de' textAlign='center'>
    Log-in to your account
</Header>
<Form size='large'>
    <Segment stacked>

<form class="form-signin">
    <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
    </div>

    <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
    <label for="inputEmail">Email address</label>
    </div>

<div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
<label for="inputPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
    <label>
    <input type="checkbox" value="remember-me"> Remember me
</label>
</div>
<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
</form>

    <Message>
    Agent Sign-up? <a href='#'>Sign Up</a>
</Message>
</Grid.Column>
</Grid>
</div>
)

export default LoginForm
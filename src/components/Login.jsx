import React from "react";

function Login() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6" id="login">
                    <h2>Log In </h2>
                    <form>
                        <div class="form-group">
                            <label for="InputEmail1">
                                <span class="fa fa-envelope" id="em1"></span>UserName
							</label>
                            <input type="username" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">
                                <span class="fa fa-key" id="em1"></span>Password
							</label>
                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">
                                Check me out
							</label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
						</button>
                    </form>
                </div>
                {/* <!--Splitup signup--> */}
                <div class="col-md-6" id="signup">
                    <h2 class="head">
                        Everyday <span id="chef">Chef</span>
                    </h2>
                    <h5 id="info">Begin Your Everyday Chef Journey Today</h5>
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" class="btn btn-primary btn-lg" id="myBtn">
                        SignUp
					</button>
                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4>SignUp</h4>
                                    <button type="button" class="close" data-dismiss="modal">
                                        &times;
									</button>

                                </div>
                                <div class="modal-body" style="padding:10px 10px;">
                                    <form role="form">
                                        <div class="form-row">​</div>
                                        <div class="form-group">
                                            <label for="InputEmail">
                                                <span class="fa fa-envelope" id="em1"></span>Email
											</label>

                                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">
                                                We'll never share your email with anyone else.
											</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="usrname">
                                                <span class="fa fa-user" id="em1"></span>
												Username
											</label>
                                            <input type="text" class="form-control" id="usrname" placeholder="Enter username" />
                                        </div>
                                        <div class="form-group">
                                            <label for="psw">
                                                <span class="fa fa-key" id="em1"></span>
												Password
											</label>
                                            <input type="text" class="form-control" id="psw" placeholder="Enter password" />
                                        </div>
                                        <div class="form-group">
                                            <label for="psw">
                                                <span class="fa fa-key" id="em1"></span>
												Confirm Password
											</label>
                                            <input type="text" class="form-control" id="psw" placeholder="Enter password" />
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="" checked />
												Remember me
											</label>
                                        </div>
                                        <button type="submit" class="btn btn-success btn-block">
                                            <span class=""></span>Sign Up
										</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
                                        <span class="glyphicon glyphicon-remove"></span>
										Cancel
									</button>
                                    <p>
                                        Not a member? <a href="#">Sign Up</a>
                                    </p>
                                    <p>
                                        Forgot <a href="#">Password?</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
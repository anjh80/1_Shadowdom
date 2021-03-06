class LoginComponent extends HTMLElement {
      constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = `

                        <style>

                        .box {
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              width: 25rem;
                              padding: 2.5rem;
                              box-sizing: border-box;
                              background: rgba(0, 0, 0, 0.6);
                              border-radius: 0.625rem;
                        }

                        .box h2 {
                              margin: 0 0 1.875rem;
                              padding: 0;
                              color: #fff;
                              text-align: center;
                        }



                        .box input[type="submit"] {
                              border: none;
                              outline: none;
                              color: #fff;
                              background-color: #03a9f4;
                              padding: 0.625rem 1.25rem;
                              cursor: pointer;
                              border-radius: 0.312rem;
                              font-size: 1rem;
                        }

                        .box input[type="submit"]:hover {
                              background-color: #1cb1f5;
                        }
                        </style>
                        <div class="box">
                                    <h2>Login</h2>
                                    <form>
                                          <input-form  input_label="UserName" input_type="email" input_name="user_email">
                                          </input-form>
                                          <input-form  input_label="Password" input_type="password" input_name="user_password"></input-form>
                                          <input type="submit" name="sign-in" value="Sign In">
                                    </form>
                              </div>
      `;


      }

      // DOM??? ???????????????. ????????? ?????? ????????? ??????.
      connectedCallback() {

      }

      // DOM?????? ???????????????. ??????????????? ???????????? ?????? ??????.
      disconnectedCallback() {


      }
      /*
            attributeChangedCallback(attrName, oldVal, newVal) {
                  // ????????? ??????/??????/???????????????.
                  this[attrName] = newVal;
            }

            adoptedCallback(oldDoc, newDoc) {
                  // ?????? Document?????? ????????? ??????
                  // ?????? ??? ?????? ?????? ???.
            }
      */



}



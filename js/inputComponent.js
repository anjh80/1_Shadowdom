class InputComponent extends HTMLElement {
      static get observedAttributes() {
            return ['input_type', 'input_label', 'input_name'];
      }

      constructor() {
            super();

            this.shadow = this.attachShadow({ mode: 'open' });
            this.shadow.innerHTML = `
            <style>
             .inputBox {
                  position: relative;
            }

             .inputBox input {
                  width: 100%;
                  padding: 0.625rem 0;
                  font-size: 1rem;
                  color: #fff;
                  letter-spacing: 0.062rem;
                  margin-bottom: 1.875rem;
                  border: none;
                  border-bottom: 0.065rem solid #fff;
                  outline: none;
                  background: transparent;
            }

             .inputBox label {
                  position: absolute;
                  top: 0;
                  left: 0;
                  padding: 0.625rem 0;
                  font-size: 1rem;
                  color: #fff;
                  pointer-events: none;
                  transition: 0.5s;
            }
            .inputBox input:focus ~ label,
            .inputBox input:not([value=""]) ~ label{
                  top: -1.125rem;
                  left: 0;
                  color: #03a9f4;
                  font-size: 0.75rem;
            }

            </style>
            <div class="inputBox">
            <input type="${this.input_type}" name="${this.input_name}" value=""  onkeyup="this.setAttribute('value', this.value);">
            <label>${this.input_label}</label>
            </div>
            `;


      }

      get input_type() {
            return this.getAttribute('input_type');
      }

      set input_type(value) {
            this.setAttribute("input_type", value);
      }

      get input_name() {
            return this.getAttribute('input_name');
      }

      set input_name(value) {
            this.setAttribute("input_name", value);
      }

      get input_label() {
            return this.getAttribute('input_label');
      }

      set input_label(value) {
            this.setAttribute("input_label", value);
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



import React from "react";
import image from '../../assets/nob3.png'

function Footer(){
    return(

        <footer class="bd-footer py-5 mt-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                <img src={image}  width="60" heigth="60"/>
                <span class="fs-5">NOble TM</span>
              </a>
              <ul class="list-unstyled small text-muted">
                <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.1/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                <li class="mb-2">Currently v5.1.3.</li>
                <li class="mb-2">Analytics by <a href="https://usefathom.com/ref/ADZSBE" target="_blank" rel="noopener">Fathom</a>.</li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/">Home</a></li>
                <li class="mb-2"><a href="/docs/5.1/">Docs</a></li>
                <li class="mb-2"><a href="/docs/5.1/examples/">Examples</a></li>
                <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Guides</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/docs/5.1/getting-started/">Getting started</a></li>
                <li class="mb-2"><a href="/docs/5.1/examples/starter-template/">Starter template</a></li>
                <li class="mb-2"><a href="/docs/5.1/getting-started/webpack/">Webpack</a></li>
                <li class="mb-2"><a href="/docs/5.1/getting-started/parcel/">Parcel</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                <li class="mb-2"><a href="https://bootstrap-slack.herokuapp.com/">Slack</a></li>
                <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    );
        
        
}

export default Footer;
<h1>GastronomIA: The Guide</h1> 
<p>Let's discover how to use our software properly, aiming a better user experience.</p>
<ol>
  <li>
    <h2>Creating an account</h2>
    <p>First things first, you'll need to create your account. All you need to do is choosing an email address and a password. We'll use this to storage your recipes as well.      </p>
    <img src="https://github.com/PedroTintino/GastronomIA/blob/main/gastronomia-gif.gif" alt="An usage preview" width="380" height="220">
  </li>
  <li>
    <h2>Using the AI Assistant</h2>
    <p>Once you've created your account and made login, you gonna be redirected to your home page where you'll be able to tell our AI the ingredients you got typing them       inside an input.</p> 
     <img src="https://github.com/PedroTintino/GastronomIA/blob/main/input-preview.png" alt="Input example" width="350" height="180">
    <p>After doing this, a recipe will be generated.</p>
      <img src="https://github.com/PedroTintino/GastronomIA/blob/main/modal-preview.png" alt="Input example" width="350" height="180">
  </li>
  <li>
    <h2>Saving and deleting your recipes</h2>
    <p>Now you've generated and saved your recipe a preview card will be rendered. Inside this you'll be able to read the complete description or delete. <strong>Note:           </strong> Even if you log out, your recipes will be maintained.</p>
    <img src="https://github.com/PedroTintino/GastronomIA/blob/main/card-preview.png" alt="Input example" width="280" height="280">
  </li>
</ol>
<h3>Enjoy it!</h3>
<h1>GastronomIA: Installation Guide (for studies)</h1>
<ul>
  <li>
    <p>Clone and acess the front/backend folders separately:</p>
    <pre class="language-bash">
      $ git clone https://github.com/PedroTintino/GastronomIA
      <br>
      $ cd backend
      <br>
      $ cd frontend
    <pre>
  </li>
  <li>
    <p>For each folder install the dependecies (use --force if you have any trouble):</p>
    <pre class="language-bash">
      npm install
    </pre>
  </li>
  <li>
    <p>Create a .env file and create your SECRET, OPENAI_API_KEY and MongoDB connection string: </p>
    <p><strong>Note:</strong> You can get an openai key at https://openai.com/blog/openai-api. The SECRET can be created by yourself typing a sequence.</p>
  </li>
  <li>
    <h2>Usage</h2>
    <p>Once you have sucefully created/installed your dependencies, you'll be able to run it using the follow commands:</p>
    <pre class="language-bash">
      //For your server-side (backend)
      $ npm start
    </pre>
    <p>And</p>
    <pre class="language-bash">
      //For your client-side (frontend)
      $ npm run dev
    </pre>
  </li>
</ul>
<h2>If you having any trouble running it, please contact me at https://www.linkedin.com/in/pedro-vieira-0b59a01b1/</h2>

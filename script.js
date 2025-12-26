const supabaseUrl = "https://pinfybszlfzqnxzdcera.supabase.co";
const supabaseKey = "sb_publishable_C9LQIAp09eyk9L4Gz6fVOw_YP4xvWI1";

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  document.getElementById("message").innerText =
    error ? error.message : "Registrierung erfolgreich!";
}

async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  document.getElementById("message").innerText =
    error ? error.message : "Login erfolgreich!";
}
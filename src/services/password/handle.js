import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
  let password = "";
  const passwordLength = Number(process.env.PASSWORD_LENGTH) || 12;
  const characters = await permittedCharacters();

  if (characters.length === 0) {
    throw new Error(
      "Nenhum tipo de caractere habilitado no .env. Ajuste as flags e tente de novo."
    );
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;

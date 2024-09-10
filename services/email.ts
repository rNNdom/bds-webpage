export const sendEmail = async (data: any) => {
  const response = await fetch('https://nnuw69lo06.execute-api.us-east-1.amazonaws.com/deploy/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'JXjHZ3XowM5SIVke3Ic4z9zmzu3co4nq59yM5EPN'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  const responseJSON = await response.json()

  if (!response.ok) {
    throw new Error(responseJSON.message || 'Hubo un problema al enviar el correo, intente nuevamente.')
  }
  return responseJSON
}

export const sendEmail = async (data: any) => {
  const response = await fetch('https://nnuw69lo06.execute-api.us-east-1.amazonaws.com/deploy/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const responseJSON = await response.json()
  // Forzar el rechazo de la promesa si el servidor devuelve un statusCode de error
  if (responseJSON.statusCode === 500) {
    console.log(responseJSON.body.message)
    throw new Error(responseJSON.body.message || 'Hubo un problema al enviar el correo, intente nuevamente.')
  }
  return responseJSON
}

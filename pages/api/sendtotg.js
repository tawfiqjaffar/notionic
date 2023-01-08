import BLOG from '@/blog.config'

export default async function sendtotg(req, res) {
  const TG_TOKEN = BLOG.telegram.token
  const TG_CHAT_ID = BLOG.telegram.chatId
  const tgUrl = 'https://api.telegram.org/bot' + TG_TOKEN + '/sendMessage'
  const init = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      text: req.body
    })
  }
  const response = await fetch(tgUrl, init)
  if (response.status === 200) {
    // const respText = await response.text()
    res.send({ status: 'Success' })
  } else {
    console.error(response)
    res.send({ status: 'Fail to send message to Telegram' })
  }
}

import {IconType, MessageConfig, MessageType, Types,} from '../Message/Message.types'
import icons from './icons'

export const Button = (dismissible: boolean | undefined) => {
    if (dismissible) {
        return `<button type="button" class="ati-message-close"><span class="ati-message-close-icon">&times;</span></button>`
    }
    return ''
}

export const Icon = (type: MessageType, icons: IconType) => {
    if (type !== 'alert') {
        return `<img src="${icons[type]}" alt="${type}">`
    }
    return `${icons[type]}`
}

export const Header = (type: Types | undefined, header: string) => {
    if (type === 'notification') {
        return `<h3 class="ati-message-header">${
            header ? header : (type as string).toUpperCase()
        }</h3>`
    }
    return ''
}

export const Message = (msg: string) => {
    return `<p class="ati-message-message">${msg}</p>`
}
export const MessageAlert = (
    msg: string,
    header: string,
    cond: MessageConfig & { msgType: MessageType },
) => {
    return `${Button(cond.dismissible)}
			${Icon(cond.msgType, icons)}
			<div class="ati-message-message-wrap">
				${Header(cond.type, header)}
			   ${Message(msg)}
	</div>`
}

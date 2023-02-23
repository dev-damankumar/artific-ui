import { IconType, MessageConfig, MessageType, Types } from "../Message/Message.types";
export declare const Button: (dismissible: boolean | undefined) => "<button type=\"button\" class=\"ati-message-close\"><span class=\"ati-message-close-icon\">&times;</span></button>" | "";
export declare const Icon: (type: MessageType, icons: IconType) => string;
export declare const Header: (type: Types | undefined, header: string) => string;
export declare const Message: (msg: string) => string;
export declare const MessageAlert: (msg: string, header: string, cond: MessageConfig & {
    msgType: MessageType;
}) => string;

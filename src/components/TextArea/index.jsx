import style from './textarea.module.css'

export const TextArea = ({ children, ...rest }) => {
    return <textarea className={style.textarea} {...rest}>
        {children}
    </textarea>
}
'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Modal } from "../Modal"
import { Chat } from "../icons/Chat"
import { TextArea } from "../TextArea"

import styles from './commentmodal.module.css'
import { SubmitButton } from "../SubmitButton"
import { Subheading } from "../Subheading"

export const ModalComment = ({ action }) => {
    const modalRef = useRef(null)
    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                    <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <TextArea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <SubmitButton>
                            Comentar
                        </SubmitButton>
                    </div>
                </form>
            </Modal>
            <IconButton
                onClick={() => modalRef.current.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}
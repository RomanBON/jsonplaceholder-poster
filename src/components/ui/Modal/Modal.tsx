import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import {
    StyledModal,
    StyledModalOverlay,
    StyledModalWrapper,
    StyledModalContent,
    StyledModalHeader,
    StyledModalHead,
    StyledModalButton,
} from "./styles";

export interface ModalProps {
    title: string;
    children: ReactNode;
    isShowing: boolean;
    onHide: () => void;
}


export const Modal: FC<ModalProps> = ({ isShowing, onHide, children, title }: ModalProps) =>
    isShowing ? createPortal(
        <StyledModal>
            <StyledModalOverlay />

            <StyledModalWrapper
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
            >
                <StyledModalContent>
                    <StyledModalHeader>
                        <StyledModalHead>{title}</StyledModalHead>

                        <StyledModalButton
                            type="button"
                            className="modal-close-button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onHide}
                        >
                            <span aria-hidden="true">&times;</span>
                        </StyledModalButton>
                    </StyledModalHeader>

                    <div>
                        {children}
                    </div>
                </StyledModalContent>
            </StyledModalWrapper>
        </StyledModal>,
        document.body,
    ) : null;

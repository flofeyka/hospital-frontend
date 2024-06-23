import { Button, Input, Modal, ModalContent } from "@nextui-org/react";
import { useState } from "react";

export default function Connection() {
    const [modal, setModal] = useState();

    return <div className="flex justify-center">
        <div>
            <div className="text-3xl font-semibold sm:text-center sm:mt-5 sm:text-4xl sm:mb-1">Контактные данные</div>
            <div className="bg-white p-3 w-[45vw] sm:w-[90vw] sm:text-2xl rounded-2xl shadow-2xl">
                <div className="text-xl font-semibold sm:text-3xl">ТЕЛЕФОН:</div>
                <div>(3852) 68-06-03 - приемная</div>
                <div>8-923-779-86-81 - телефон для приема устных обращений от граждан</div>
                <div className="text-xl font-semibold sm:text-3xl">РЕЖИМ РАБОТЫ:</div>
                <div>с 8.00 до 17.00 в рабочие дни недели - администрация</div>
                <div>Прием граждан главным врачом проводится ежемесячно каждый четвертый четверг в 14:00 - кабинет 203 по предварительной записи</div>
                <div>Ежедневный прием граждан - кабинет 202</div>
                <div className="mt-2 flex justify-center"><Button onClick={() => setModal(true)} className="font-semibold text-white sm:w-full" size="lg" color="success">Записаться онлайн </Button></div>
                <Modal isOpen={modal} onOpenChange={setModal} placement="auto">
                <ModalContent className="p-3">
                    <h2 className="text-center text-3xl font-semibold mb-3">Записаться к врачу</h2>
                    <Input label="Ваше имя" />
                    <Input className="my-3" label="Номер телефона" type="phoneNumber" />
                    <Input className="mb-3" label="Электронная почта" type="E-mail" />
                    <Button className="font-semibold text-white sm" onClick={() => setModal(false)} size="lg" color="success">Записаться </Button>
                </ModalContent>
            </Modal>
            </div>
        </div>
        
    </div>
}

export default function AboutUs() {
    return <div className="w-full flex justify-center">
        <div className="h-full flex flex-col justify-center">
            <div className="text-4xl font-semibold mb-2 sm:text-center">
                О больнице
            </div>
            <div className="rounded-2xl shadow-2xl p-3 text-xl w-[60vw] sm:w-[90vw] bg-white py-10">
                <div className="mb-5 font-semibold text-2xl">
                    КГБУЗ «ССМП, г. Барнаул»  оказывает медицинскую помощь населению круглосуточно, ежедневно, без выходных и праздничных дней.
                </div>
                <div className="mb-3">
                    Главный номер для вызова скорой медицинской помощи в Алтайском крае — номер 03 с городского телефона, 103 (вызов с мобильного телефона) Помимо этого существует номер 112 — вызов с мобильных телефонов; работает при заблокированной SIM-карте, при отсутствии SIM-карты, а также при отсутствии денежных средств на счету телефона.
                </div>
                <div><b>Кому звонить в случае ДТП:</b></div>
                <li className="mb-3">
                    112 – Единый номер экстренных оперативных служб
                </li>
                <li className="mb-3">
                    102 – ГИБДД
                </li >
                <li className="mb-3">
                    103 – Скорая помощь
                </li>

                <li className="mb-3">
                    8(3852)246-787
                </li>
                <li className="mb-2">
                    8-960-964-26-35 – оперативный дежурный Алтайского краевого центра медицины катастроф (АКЦМК)
                </li>
                <div>
                    8-800-201-47-17 - Краевой кризисный центр для женщин
                </div>
            </div>
        </div>    </div>
}
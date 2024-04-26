export const Aside = () => {
    return (
        <section id="aside" className="w-full h-full">
                    <article>
                        <Image url="https://random.imagecdn.app/500/500" />
                        <div id="info">
                            <p>Blindside (Michael Bennett Book 12)</p>
                            <p>$69.99</p>
                        </div>
                        <div>
                            <Icon url="icons/Heart.svg" size={'w-10 h-10'} />
                            <Icon url="icons/share.svg" size={'w-10 h-10'} />
                        </div>
                    </article>
                </section>
    )
}
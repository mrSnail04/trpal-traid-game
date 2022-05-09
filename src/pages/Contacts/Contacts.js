import React from 'react';
import cn from "classnames";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Photo from './assets/myPhoto.jpg';
import Phone from './assets/phone.png';
import Telegram from './assets/telegram.png';
import Text from "../../components/Text";

import s from './Contacts.module.scss';

const Contacts = () => {
    return(
        <section className={cn(s.root)}>
            <Container>
                <Heading backLine black>Contacts</Heading>
                <div className={cn(s.root, s.contactWrap)}>
                    <img className={s.img} src={Photo} alt='creater'/>
                    <div>
                        <Heading black>Bulavsky Maksim </Heading>
                        <Text strong element='p'>React developer.</Text>
                        <div className={s.contact}>
                            <img className={s.imgIcon} src={Phone} alt='phone'/>
                            <Text element='p'>+375(29)816-07-91</Text>
                        </div>
                        <div className={s.contact}>
                            <img className={s.imgIcon} src={Telegram} alt='telegram'/>
                            <Text element='p'>@MrSnail04</Text>
                        </div>



                    </div>

                </div>


            </Container>
        </section>
    )
}

export default Contacts;
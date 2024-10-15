'use client'
import Link from 'next/link';
import * as T from '@/components/TopBar/Text';
import { TextLink } from '@/components/TopBar/Text';
import { LogoCoders } from '@/assets/TopBar/svg';
import { Button } from './Button';
import { useToggle } from '@/hooks/useToggle';
import { SideBar } from './Sidebar';

function Logo() {
    return (
        <Link href='/' className='ml-[20px] xl:ml-0 flex justify-between items-center'>
            <LogoCoders className="w-[4.0rem] xl:w-[6.1rem]" />
            <T.LogoText />
        </Link>
    )
}

function Sobre() {
    return (
        <Link href='#QuemSomos'>
            <TextLink text='Sobre' />
        </Link>
    )
}


function Beneficios() {
    return (
        <Link href='#Beneficios'>
            <TextLink text='Benefícios' />
        </Link>
    )
}

function Oportunidades() {
    return (
        <Link href='#Oportunidades'>
            <TextLink text='Oportunidades' />
        </Link>
    )
}

function Comunidade() {
    return (
        <Link href='#Comunidade'>
            <TextLink text='Comunidade' />
        </Link>
    )
}
function ButtonTopBar() {
    const { isSidebarOpen, handleBurguerClick, handleSidebarClose } = useToggle(false);
    return (
        <>
            <Link href='#Contato'>
                <Button size='default'>
                    Contato
                </Button>
            </Link>
            <Button onClick={handleBurguerClick} burguer />
            {isSidebarOpen && <SideBar onClose={handleSidebarClose} />}
        </>
    );
}


export {
    Logo,
    Sobre,
    Oportunidades,
    Beneficios,
    Comunidade,
    ButtonTopBar,
}
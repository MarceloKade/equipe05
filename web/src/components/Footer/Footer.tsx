import * as C from "./Containers";
import * as E from "./Elements";
import footerLogoImage from "../../assets/footer-logo.svg";
import footerGithubImage from "../../assets/footer-github.svg";
import footerInstagramImage from "../../assets/footer-instagram.svg";
import footerLinkedinImage from "../../assets/footer-linkedin.svg";
import footerMailImage from "../../assets/footer-mail.svg";
import footerWhatsAppImage from "../../assets/footer-whatsapp.svg";
import footerXImage from "../../assets/footer-x.svg";
import footerYouTubeImage from "../../assets/footer-youtube.svg";
import Image from "next/image";

export function Footer() {
  return (
    <C.Container>
      <C.SocialForm>
        <C.SocialMedia>
          <Image src={footerLogoImage} alt="logo" width={92} height={58} />
          <C.Contacts>
            <C.Contact>
              <E.Title>Contato</E.Title>
              <C.IconName>
                <Image src={footerMailImage} alt="email" />
                <E.Subtitle>Codigocerto@gmail.com</E.Subtitle>
              </C.IconName>
            </C.Contact>
            <C.Contact>
              <E.Title>WhatsApp</E.Title>
              <C.IconName>
                <Image src={footerWhatsAppImage} alt="whatsapp" />
                <E.Subtitle>Código Certo</E.Subtitle>
              </C.IconName>
            </C.Contact>
            <C.Contact>
              <E.Title>Parcerias</E.Title>
              <C.IconName>
                <Image src={footerMailImage} alt="email" />
                <E.Subtitle>Parceiroscodigocerto@gmail.com</E.Subtitle>
              </C.IconName>
            </C.Contact>
          </C.Contacts>
          <C.Social>
            <E.SocialMediaTitle>Nossas redes sociais</E.SocialMediaTitle>
            <C.DividerMobile/>
            <C.SocialDetails>
              <C.SocialAddress>
                <Image src={footerGithubImage} alt="github" />
                <E.SocialMediaSubtitle>Github</E.SocialMediaSubtitle>
              </C.SocialAddress>
              <C.SocialAddress>
                <Image src={footerInstagramImage} alt="instagram" />
                <E.SocialMediaSubtitle>Instagram</E.SocialMediaSubtitle>
              </C.SocialAddress>
              <C.SocialAddress>
                <Image src={footerXImage} alt="x" />
                <E.SocialMediaSubtitle>Twitter</E.SocialMediaSubtitle>
              </C.SocialAddress>
              <C.SocialAddress>
                <Image src={footerLinkedinImage} alt="linkedin" />
                <E.SocialMediaSubtitle>Linkedin</E.SocialMediaSubtitle>
              </C.SocialAddress>
              <C.SocialAddress>
                <Image src={footerYouTubeImage} alt="youtube" />
                <E.SocialMediaSubtitle>Youtube</E.SocialMediaSubtitle>
              </C.SocialAddress>
            </C.SocialDetails>
          </C.Social>
        </C.SocialMedia>
        <C.FormContainer>
          <E.FormTitle>Entre em contato</E.FormTitle>
          <C.Form>
            <C.InputsContainer>
              <E.InputName />
              <E.InputEmail />
            </C.InputsContainer>
            <E.InputMessage />
            <E.Button>Enviar</E.Button>
          </C.Form>
        </C.FormContainer>
      </C.SocialForm>
      <C.Divider />
      <div className="w-full flex justify-start">
        <C.Copyright>
          <E.CopyrightText>
            &copy; 2024 Código Certo Coders. Todos os direitos reservados
          </E.CopyrightText>
          <C.Terms>
            <E.Link>Política de Privacidade</E.Link>
            <E.Link>Termos de Serviço</E.Link>
          </C.Terms>
        </C.Copyright>
      </div>
    </C.Container>
  );
}

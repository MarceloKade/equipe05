"use client";
import * as E from "./Elements";
import * as C from "./Containers";
import { useToggle } from "@/hooks/useToggle";
import ModalForm from "../modal/ModalForm";

export default function Feedbacks() {
  const { isModalFormOpen, handleModalFormClose, handleModalFormOpen } =
    useToggle();

  return (
    <C.ContainerSection>
      <C.ContainerFeedbacks>
        <C.SmallContainer>
          <C.GridContainer></C.GridContainer>
          <C.ContainerTitle>
            <E.comunidadeFeedbacks />
            <E.titulo />
            <E.buttonQueroMeInscrever
              handleModalFormOpen={handleModalFormOpen}
            />
          </C.ContainerTitle>
          <C.ContainerGrid>
            <C.ContainerFlex>
              <C.Card>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Diam nullam nulla arcu
                  id suspendisse bibendum tristique. Aenean nisl at gravida
                  amet. Et vestibulum a pretium facilisis a. Vitae in molestie
                  posuere fermentum.
                </p>
                <C.ContainerUser>
                  <E.ImgCard1 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Excellent conversation. Very practical, logical and motivating
                  info. Thanks for your time Kosta! TalExcellent conversation.
                  Very practical, logical and motivating info. Thanks for your
                  time Kosta! Tal
                </p>
                <C.ContainerUser>
                  <E.ImgCard4 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Excellent conversation. Very practical, logical and motivating
                  info. Thanks for your time Kosta! Tal
                </p>
                <C.ContainerUser>
                  <E.ImgCard7 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
            </C.ContainerFlex>
            <C.ContainerFlex>
              <C.Card>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Convallis tellus odio
                  elit sed. Consectetur purus id mi faucibus id dignissim risus
                  eget nulla. Vitae lectus leo magna.
                </p>
                <C.ContainerUser>
                  <E.ImgCard2 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vestibulum turpis ac
                  velit pretium eget nullam fermentum sit pharetra. Viverra
                  donec venenatis aliquam.
                </p>
                <C.ContainerUser>
                  <E.ImgCard5 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Excellent conversation. Very practical, logical and motivating
                  info. Thanks for your time Kosta! Tal
                </p>
                <C.ContainerUser>
                  <E.ImgCard7 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
            </C.ContainerFlex>
            <C.ContainerFlex>
              <C.Card>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Id sed ultricies non
                  rutrum massa volutpat fermentum.
                </p>
                <C.ContainerUser>
                  <E.ImgCard3 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque fermentum
                  viverra tristique pellentesque enim mi. Ac amet volutpat
                  tellus ultrices in gravida dui. Vestibulum in odio dolor nunc
                  amet. Donec non egestas eu nam elementum ac facilisis sit.
                  Scelerisque sapien duis magna.
                </p>
                <C.ContainerUser>
                  <E.ImgCard6 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
              <C.Card>
                <p>
                  Excellent conversation. Very practical, logical and motivating
                  info. Thanks for your time Kosta! Tal
                </p>
                <C.ContainerUser>
                  <E.ImgCard7 />
                  <C.ContainerStack>
                    <E.Stack1 />
                  </C.ContainerStack>
                </C.ContainerUser>
              </C.Card>
            </C.ContainerFlex>
          </C.ContainerGrid>
        </C.SmallContainer>
      </C.ContainerFeedbacks>
      {isModalFormOpen && (
        <ModalForm handleModalFormClose={handleModalFormClose} />
      )}
    </C.ContainerSection>
  );
}

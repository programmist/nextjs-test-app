import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;

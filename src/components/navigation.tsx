"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { AuthUser, signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Navigation() {
  const { user } = useAuthenticator((context) => {
    return [context.user];
  });
  const [authCheck, setAuthCheck] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const hubListener = Hub.listen("auth", (data) => {
      const { payload } = data;
      switch (payload.event) {
        case "signedIn":
          setAuthCheck(true);
          // setAuthUser(payload.data);
          router.push("/");
          break;
        case "signedOut":
          setAuthCheck(false);
          // setAuthUser(null);
          router.push("/login");
          break;
      }
    });

    return () => {
      hubListener();
    };
  }, []);

  useEffect(() => {
    if (user) {
      setAuthCheck(true);
    } else {
      setAuthCheck(false);
    }
  }, [user]);

  const logoutHandler = async (event: any) => {
    event.preventDefault();
    await signOut();
    router.push("/");
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Do:Do
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/relations">
          Relations
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        {authCheck ? (
          <NavbarLink as={Link} href="#" onClick={logoutHandler}>
            Logout
          </NavbarLink>
        ) : (
          <NavbarLink as={Link} href="/login">
            Login
          </NavbarLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}

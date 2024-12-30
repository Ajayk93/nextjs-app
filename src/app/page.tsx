"use client";
import ProfilePage from "./profile/page";

interface Item {
  id: number;
  name: string;
}

export default function Home() {
  return (
    <ProfilePage />
  );
}

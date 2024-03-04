"use client"

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const BreadCrumbs_ = () => {
  return (
    <Breadcrumbs size="lg">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>text</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export { BreadCrumbs_ };

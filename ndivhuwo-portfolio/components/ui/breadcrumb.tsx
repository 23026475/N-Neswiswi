"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <nav aria-label="breadcrumb">
    <ol
      ref={ref}
      className={cn(
        "flex items-center space-x-1 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  </nav>
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

function BreadcrumbLink({
  href,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    >
      {children}
    </a>
  )
}

function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span role="presentation" className={cn("mx-1 opacity-60", className)} {...props}>
      <ChevronRight className="h-4 w-4" />
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
}

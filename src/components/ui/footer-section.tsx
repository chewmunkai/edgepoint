"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import logoDark from "@/assets/logo-dark-bg.png"

function Footerdemo() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid gap-8 md:gap-10 grid-cols-2 lg:grid-cols-4">
          {/* Logo & Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src={logoDark} alt="Edge Point" className="h-12 w-auto" />
            </a>
            <p className="mb-4 font-body text-sm text-white/60">
              Join our newsletter for updates.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-neon focus:ring-neon/20 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-neon text-black hover:bg-neon/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="space-y-2 text-sm font-body">
              <a href="#" className="block text-white/60 transition-colors hover:text-white">Home</a>
              <a href="#about" className="block text-white/60 transition-colors hover:text-white">About Us</a>
              <a href="#strategy" className="block text-white/60 transition-colors hover:text-white">Framework</a>
              <a href="#faq" className="block text-white/60 transition-colors hover:text-white">FAQ</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <address className="space-y-2 text-sm font-body not-italic text-white/60">
              <p>hello@edgepoint.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Facebook</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Twitter</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Instagram</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs font-body text-white/40">
            © 2024 Edge Point. All rights reserved.
          </p>
          <nav className="flex gap-4 text-xs font-body">
            <a href="#" className="text-white/40 transition-colors hover:text-white">Privacy</a>
            <a href="#" className="text-white/40 transition-colors hover:text-white">Terms</a>
            <a href="#" className="text-white/40 transition-colors hover:text-white">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }

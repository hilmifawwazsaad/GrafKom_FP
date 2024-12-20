'use client'

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function Features() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <Navbar>
            <div>
                <h1>Features</h1>
            </div>
        </Navbar>
    );
}
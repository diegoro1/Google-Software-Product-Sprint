import React from 'react';
import Card from '../Card';
import './Projects.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import lpaImg from '../../assets/lpa.jpg';
import clippyImg from '../../assets/clippy.png';
import bobRossImg from '../../assets/bobross.png';
import skipListImg from '../../assets/skiplist.jpg';

// hard coded project data to be sent to Card component
const clippy = {
    title: "Clippy",
    img: clippyImg,
    description: "Clippy is a social bookmarking service designed for users to explore and manage resources on the Internet. Users can immerse themselves in their own distraction-free space curated by them or explore resources gathered by others in the community",
    tech: ["HTML", "CSS", "JavaScript", "C#", ".NET", "React"],
};

const bobRoss = {
    title: "The Bob Ross Experience",
    img: bobRossImg,
    description: "A Web App that lets you create your own pixel art by changing the number of pixels and by choosing multiple colors!",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
};

const skipList = {
    title: "Skip List",
    img: skipListImg,
    description: "A probabilistic data structure that allows O(log n) search complexity as well as O(log n) insertion complexity within an ordered sequence of n elements",
    tech: ["Java"],
};

const plo = {
    title: "PL0 Compiler",
    img: lpaImg,
    description: "A Pascal like programming lanaguage with basic features. Includes everything a regular compiler has including: a lexicographical analyzer, parser, and a virtual machine.",
    tech: ["C"],
};

const transcriber = {
    title: "Transcriber",
    img: undefined,
    description: "A Command line application developed in python that transcribes .wav into .txt files for data analysis",
    tech: ["Python"],
};

const lpa = {
    title: "LPA Data Structure",
    img: lpaImg,
    description: "Data Structure developed in C that breaks arrays into fragments to eliminate bloat by allocating and deallocating subarrays",
    tech: ["C"],
};

export default function Projects() {
    return (
        <div>
            <Container maxWidth="md">
                <h1 className="title-projects">Projects</h1>
                <Grid container spacing={6} justify="center">
                    <Grid item xs={12}>
                        <Card project={clippy}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Card project={bobRoss}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Card project={skipList}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Card project={lpa}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
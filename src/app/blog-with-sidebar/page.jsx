import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import React from 'react';

export const metadata = {
    title: "Fintech Shield Solutions LLC - Blog With Sidebar"
}

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogWithSidebarPage;
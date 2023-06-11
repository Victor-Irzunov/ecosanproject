"use client"
import { useRouter } from "next/router";
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from "antd";
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { useScreens } from "@/constants/constants";

const BreadCrumbComp = () => {
  const cyrillicToTranslit = new CyrillicToTranslit();
  const router = useRouter();
  const screens = useScreens();

  const breadCrumbView = () => {
    const { pathname } = router;
    const pathnames = pathname.split("/").filter((item) => item);
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
      <div className={`xyy:px-5 sm:container sm:mx-auto ${screens.md ? 'pt-20': 'pt-4'}`}>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link href="/"><a><HomeOutlined /></a></Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            let names = cyrillicToTranslit.reverse(name.split('-').join(' '));

            if (names.length > 4) {
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Breadcrumb.Item key={index}>{capitalize(names)}</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index}>
                  <Link href={routeTo}><a>{capitalize(names)}</a></Link>
                </Breadcrumb.Item>
              );
            }
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumbComp;

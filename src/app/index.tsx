import { ActivityIndicator, FlatList } from "react-native";
import apodsjson from "../data/apods.json";
import ApodListItem from "@/comp/ApodListItem";
import { useEffect, useState } from "react";
import FullScreenImage from "../components/FullScreenImage";
import { Apod } from "../types";
import { fetchApods } from "../api/apods";

export default function Page() {
  const [apod, setApod] = useState<Apod[]>(apodsjson);
  const [actionImg, seAcionImage] = useState<string>(null);

  useEffect(() => {
    // fetchApods().then(setApod);
  }, []);

  if (!apod) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <FlatList
        data={apod}
        renderItem={({ item }) => (
          <ApodListItem
            apod={item}
            onImagePress={() => seAcionImage(item.url)}
          />
        )}
      />
      <FullScreenImage url={actionImg} onClose={() => seAcionImage(null)} />
    </>
  );
}

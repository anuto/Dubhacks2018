package com.example.althea.fs_search.ui;

import com.example.althea.fs_search.model.Store;

import android.content.Context;
import android.os.Build;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.althea.fs_search.R;
import java.util.List;
import java.util.Collection;

import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.nostra13.universalimageloader.core.display.FadeInBitmapDisplayer;

public class StoreAdaptor extends ArrayAdapter<Store> {

    private final Context context;

    private final DisplayImageOptions displayImageOptions;
    private ImageLoader imageLoader;

    public StoreAdaptor(final Context context, int resource) {
        super(context, resource);
        this.context = context;

        displayImageOptions = new DisplayImageOptions.Builder()
                .cacheOnDisk(true)
                .resetViewBeforeLoading(true)
                .displayer(new FadeInBitmapDisplayer(300))
                .build();
        new Thread(new Runnable() {
            @Override
            public void run() {
                imageLoader = ImageLoader.getInstance();
                if (!imageLoader.isInited()) {
                    ImageLoaderConfiguration configuration = new ImageLoaderConfiguration.Builder(context)
                            .memoryCacheSize(2 * 1024 * 1024)
                            .memoryCacheSizePercentage(13) // default
                            .build();
                    imageLoader.init(configuration);
                }
            }
        }).start();
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        View cell = convertView;
        if (cell == null) {
            cell = LayoutInflater.from(context).inflate(R.layout.cell_store, parent, false);
        }

        ImageView posterImageView = (ImageView) cell.findViewById(R.id.imageview_poster);
        TextView titleTextView = (TextView) cell.findViewById(R.id.textview_title);
        TextView yearTextView = (TextView) cell.findViewById(R.id.textview_year);

        Store result = getItem(position);
        // when we have food images
//        imageLoader.displayImage(result.getResult().getImage(), posterImageView, displayImageOptions);
//        titleTextView.setText(highlightRenderer.renderHighlights(result.getHighlight("title").getHighlightedValue()));
//        yearTextView.setText(String.format("%d", result.getResult().getYear()));
        titleTextView.setText(result.getStoreName());
        yearTextView.setText(result.getAddress());
        return cell;

    }

    public void addAll(Collection<? extends Store> stores) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
            super.addAll(stores);
        } else {
            for (Store store : stores) {
                add(store);
            }
            notifyDataSetChanged();
        }
    }
}

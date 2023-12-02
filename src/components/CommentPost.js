export default function CommentPost({
    username,
    verified,
    commentContent,
    avatar,
}) {
    return (
        <div className="bg-black">
            {/* Comment content */}
            <div className="flex flex-row">
                {/* Ava */}
                <div className="pr-3 flex-none cursor-pointer">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img
                            src={avatar}
                            className="w-full h-auto"
                            alt={`Avatar of `}
                        />
                    </div>
                </div>
                {/* CMT content */}
                <div className="text-white flex-grow overflow-hidden flex flex-col">
                    {/*  CMT content */}
                    <p className="text-sm mb-1">
                        <span class="inline-flex items-baseline text-sm font-semibold">
                            <span className="mr-1">Drey.ng</span>
                            {verified && (
                                <svg
                                    aria-label="Verified"
                                    className="mr-1"
                                    fill="rgb(0, 149, 246)"
                                    height="12"
                                    role="img"
                                    viewBox="0 0 40 40"
                                    width="12"
                                >
                                    <title>Verified</title>
                                    <path
                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            )}
                        </span>
                        {commentContent}
                    </p>
                    {/* CMT time, like counts */}
                    <div className="text-xs text-ig-grey flex">
                        <div className="mr-3">9h</div>
                        <div className="mr-3 font-semibold">70 likes</div>
                        <div className="mr-3 font-semibold">Reply</div>
                    </div>
                </div>
                {/* heart */}
                <div className="pl-2 m-1">
                    <svg
                        aria-label="Like"
                        fill="white"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                    >
                        <title>Like</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </svg>
                </div>
            </div>

            {/* replies */}
            <div className="text-xs ml-12 py-4 text-ig-grey flex">
                <div className="text-xs pr-4">━━━━ </div>
                View replies (1)
            </div>
        </div>
    );
}
